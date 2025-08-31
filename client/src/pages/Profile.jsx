import { useState, useEffect } from "react";

export default function Profile() {
    const [user, setUser] = useState({ name: "", phone: "" });
    const [savingProfile, setSavingProfile] = useState(false);
    const [loadingProfile, setLoadingProfile] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();

                if (res.ok) {
                    setUser({ name: data.name || "", phone: data.phone || "" });
                } else {
                    console.error(data.message);
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            } finally {
                setLoadingProfile(false);
            }
        };

        fetchUser();
    }, [token]);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setSavingProfile(true);

        try {
            const res = await fetch("http://localhost:5000/api/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(user),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Profile updated successfully");
            } else {
                alert(data.message || "Failed to update profile");
            }
        } catch (err) {
            console.error("Profile update failed:", err);
        } finally {
            setSavingProfile(false);
        }
    };

    if (loadingProfile) return <p className="p-8">Loading profile...</p>;

    return (
        <section className="p-8 min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Edit Profile</h2>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                <form
                    onSubmit={handleProfileUpdate}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        placeholder="Name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={user.phone}
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        className="p-2 border rounded"
                    />
                    <button
                        type="submit"
                        disabled={savingProfile}
                        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
                    >
                        {savingProfile ? "Updating..." : "Update Profile"}
                    </button>
                </form>
            </div>
        </section>
    );
}
