import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Plus, Trash2, CheckCircle, Clock, Archive } from "lucide-react";

export default function AdminPrayers() {
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });

  const prayersList = trpc.prayerWall.list.useQuery({ limit: 100 });
  const addPrayerMutation = trpc.prayerWall.addFromEmail.useMutation();
  const updateStatusMutation = trpc.prayerWall.updateStatus.useMutation();

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Access Denied</h1>
          <p className="text-charcoal-light mb-6">You must be logged in as an admin to access this page.</p>
          <Link href="/" className="text-gold hover:text-gold-light font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.request.trim()) {
      toast.error("Please fill in name and prayer request");
      return;
    }

    try {
      await addPrayerMutation.mutateAsync({
        name: formData.name,
        email: formData.email || undefined,
        request: formData.request,
      });
      toast.success("Prayer added to wall successfully!");
      setFormData({ name: "", email: "", request: "" });
      prayersList.refetch();
    } catch (error) {
      toast.error("Failed to add prayer");
    }
  };

  const handleStatusChange = async (id: number, newStatus: "active" | "answered" | "archived") => {
    try {
      await updateStatusMutation.mutateAsync({ id, status: newStatus });
      toast.success("Prayer status updated");
      prayersList.refetch();
    } catch (error) {
      toast.error("Failed to update prayer status");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "archived":
        return <Archive className="w-4 h-4 text-gray-600" />;
      default:
        return <Clock className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Header */}
      <div className="bg-charcoal text-cream py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <Link href="/" className="text-gold hover:text-gold-light transition-colors mb-4 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Admin: Prayer Wall Management
          </h1>
          <p className="text-cream/70">Add and manage prayers from email submissions</p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Add Prayer Form */}
          <section className="mb-12 bg-white rounded-sm p-8 border border-gold/10">
            <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Add Prayer from Email
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prayer requester's name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Prayer requester's email (optional)"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Prayer Request *</label>
                <Textarea
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder="Enter the prayer request..."
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                disabled={addPrayerMutation.isPending}
                className="bg-gold text-charcoal hover:bg-gold-light"
              >
                <Plus className="w-4 h-4 mr-2" />
                {addPrayerMutation.isPending ? "Adding..." : "Add Prayer to Wall"}
              </Button>
            </form>
          </section>

          {/* Prayers List */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Active Prayers on Wall
            </h2>
            {prayersList.isLoading ? (
              <div className="text-center text-charcoal-light py-8">Loading prayers...</div>
            ) : prayersList.data && prayersList.data.length > 0 ? (
              <div className="space-y-4">
                {prayersList.data.map((prayer) => (
                  <div key={prayer.id} className="bg-white rounded-sm p-6 border border-gold/10 hover:border-gold transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-charcoal">{prayer.name}</h3>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(prayer.status)}
                            <span className="text-xs font-semibold text-gray-600 uppercase">{prayer.status}</span>
                          </div>
                        </div>
                        {prayer.email && <p className="text-sm text-charcoal-light mb-2">{prayer.email}</p>}
                        <p className="text-charcoal-light leading-relaxed">{prayer.request}</p>
                        <p className="text-xs text-charcoal-light/60 mt-3">
                          Added: {new Date(prayer.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {prayer.status !== "active" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleStatusChange(prayer.id, "active")}
                          disabled={updateStatusMutation.isPending}
                        >
                          <Clock className="w-3 h-3 mr-1" /> Active
                        </Button>
                      )}
                      {prayer.status !== "answered" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleStatusChange(prayer.id, "answered")}
                          disabled={updateStatusMutation.isPending}
                        >
                          <CheckCircle className="w-3 h-3 mr-1" /> Answered
                        </Button>
                      )}
                      {prayer.status !== "archived" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleStatusChange(prayer.id, "archived")}
                          disabled={updateStatusMutation.isPending}
                        >
                          <Archive className="w-3 h-3 mr-1" /> Archive
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-charcoal-light py-8 bg-white rounded-sm border border-gold/10">
                No prayers on the wall yet. Add one above!
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
