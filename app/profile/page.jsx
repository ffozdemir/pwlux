"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); //useState(true);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://via.placeholder.com/150",
  }); //useState(null);
  const [orders, setOrders] = useState([
    { id: 1, date: "2023-01-01", total: 100 },
    { id: 2, date: "2023-01-15", total: 200 },
  ]);

  // useEffect(() => {
  //    const fetchProfile = async () => {
  //       setLoading(true);
  //       try {
  //          const response = await fetch("/api/profile");
  //          if (!response.ok) {
  //             if (response.status === 401) {
  //                router.push("/login");
  //                return;
  //             }
  //             throw new Error("Failed to fetch profile");
  //          }
  //          const data = await response.json();
  //          setUser(data);
  //       } catch (error) {
  //          console.error("Error fetching profile:", error);
  //       } finally {
  //          setLoading(false);
  //       }
  //    };

  //    fetchProfile();
  // }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No user information available.</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-400 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-red-500 text-white">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="mt-1 max-w-2xl text-sm">
            Manage your profile information and settings.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Profile Picture
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  alt="Profile Picture"
                  className="rounded-full w-24 h-24 border border-gray-300"
                />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Order History
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {orders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {order.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {order.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No orders yet.</p>
                )}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Actions</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
                  Change Password
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Logout
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
