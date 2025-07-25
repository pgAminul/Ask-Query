"use client";
import Image from "next/image";
import useAuth from "../Components/AuthProvider/useAuth";

const DashboardHome = () => {
  // Static data
  const stats = {
    totalQueries: 1243,
    successfulToday: 42,
    avgResponseTime: 156,
    errorRate: 3.2,
  };

  const recentQueries = [
    {
      id: 1,
      timestamp: Date.now() - 1000000,
      text: "SELECT * FROM users WHERE status = 'active'",
      status: "success",
      duration: 42,
    },
    {
      id: 2,
      timestamp: Date.now() - 2000000,
      text: "UPDATE orders SET status = 'shipped' WHERE id = 1234",
      status: "success",
      duration: 28,
    },
    {
      id: 3,
      timestamp: Date.now() - 3000000,
      text: "DELETE FROM products WHERE stock = 0",
      status: "error",
      duration: 56,
    },
    {
      id: 4,
      timestamp: Date.now() - 4000000,
      text: "INSERT INTO logs (message) VALUES ('System started')",
      status: "success",
      duration: 19,
    },
  ];
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Query Dashboard
        </h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-gray-600">Welcome back!</span>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <Image
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-white shadow"
            />{" "}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Queries" value={stats.totalQueries} icon="📊" />
        <StatCard
          title="Successful Today"
          value={stats.successfulToday}
          icon="✅"
        />
        <StatCard
          title="Avg Response Time"
          value={`${stats.avgResponseTime}ms`}
          icon="⏱️"
        />
        <StatCard title="Error Rate" value={`${stats.errorRate}%`} icon="⚠️" />
      </div>

      {/* Recent Queries Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Queries
          </h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Query
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentQueries.map((query) => (
                <tr key={query.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(query.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900 max-w-xs truncate">
                    {query.text}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          query.status === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                    >
                      {query.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {query.duration}ms
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          New Query
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors">
          View History
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors">
          API Documentation
        </button>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-lg font-medium text-gray-500">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
  </div>
);

export default DashboardHome;
