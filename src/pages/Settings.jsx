import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Loader2, Mail, UserRound } from "lucide-react";

const errorMessage = (err) =>
  err?.response?.data?.error ||
  err?.message ||
  "We could not delete your account. Please try again.";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null));
  }, []);

  const deleteAccount = useMutation({
    mutationFn: async () => {
      const res = await base44.functions.invoke("deleteAccount", { confirm: "DELETE" });
      if (res.data?.error) throw new Error(res.data.error);
      return res.data;
    },
    // Show the deleting state straight away.
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["user"] });
      setBusy(true);
      setError("");
    },
    onSuccess: async () => {
      await base44.auth.logout();
      window.location.href = "/login";
    },
    onError: (err) => {
      setBusy(false);
      setError(errorMessage(err));
      toast({
        title: "Account not deleted",
        description: errorMessage(err),
        variant: "destructive"
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  });

  const handleDelete = (e) => {
    e.preventDefault();
    if (text.trim().toUpperCase() !== "DELETE") return;
    deleteAccount.mutate();
  };

  return (
    <div className="pt-2">
      <section className="py-4">
        <div className="mx-auto max-w-[700px] px-5 sm:px-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary font-bold mb-2">
            Settings
          </p>
          <div className="h-px w-16 bg-primary/80 mb-4" />

          <div className="bg-card border border-border rounded-lg p-5 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <UserRound className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-body text-sm font-semibold text-foreground truncate">
                  {user?.full_name || "Member account"}
                </p>
                <p className="font-body text-xs text-foreground/60 flex items-center gap-1.5 truncate">
                  <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                  {user?.email || "—"}
                </p>
              </div>
            </div>
            <p className="font-body text-xs text-foreground/60 leading-relaxed">
              Appearance follows your device setting — light or dark — automatically.
            </p>
          </div>

          <div className="border border-destructive/30 rounded-lg p-5">
            <div className="flex items-center gap-2 text-destructive mb-3">
              <AlertTriangle className="h-5 w-5" />
              <h2 className="font-display text-xl text-destructive">Delete Account</h2>
            </div>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-2">
              Deleting your account is permanent. You will be signed out immediately and your
              profile, login and membership access in this app are removed.
            </p>
            <p className="font-body text-xs text-foreground/60 leading-relaxed mb-5">
              This cannot be undone. To rejoin later you would need a new invitation from the
              association.
            </p>

            {!confirming ? (
              <Button
                variant="destructive"
                className="w-full h-12 font-medium"
                onClick={() => setConfirming(true)}>
                Delete Account
              </Button>
            ) : (
              <form onSubmit={handleDelete} className="space-y-3">
                <label htmlFor="confirm-delete" className="font-body text-sm text-foreground/80 block">
                  Type <span className="font-semibold text-destructive">DELETE</span> to confirm.
                </label>
                <Input
                  id="confirm-delete"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="DELETE"
                  autoComplete="off"
                  autoCapitalize="characters"
                  className="h-12"
                />
                {error && (
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    type="submit"
                    variant="destructive"
                    className="h-12 font-medium sm:flex-1"
                    disabled={busy || text.trim().toUpperCase() !== "DELETE"}>
                    {busy ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      "Permanently delete my account"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 font-medium"
                    disabled={busy}
                    onClick={() => {
                      setConfirming(false);
                      setText("");
                      setError("");
                    }}>
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}