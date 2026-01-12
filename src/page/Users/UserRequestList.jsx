'use client'
import React, { useState } from 'react';
import { RiUserForbidLine } from 'react-icons/ri';
import { Modal, Button } from 'antd';

// Fake user request data
const allRequests = Array.from({ length: 32 }).map((_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  email: `user${i + 1}@example.com`,
  requestType: 'Account Approval',
  date: '10 Apr 2024',
  status: i % 2 === 0 ? 'Pending' : 'Approved',
}));

const ITEMS_PER_PAGE = 10;

const UserRequestList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const totalPages = Math.ceil(allRequests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = allRequests.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const showBlockModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleBlockUser = () => {
    console.log('Blocked user:', selectedUser);
    handleCancel();
  };

  return (
    <div className='py-5'>
      <div className="w-full rounded-2xl bg-[#1a3c58] p-6  text-white shadow-xl">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b border-gray-500">
                <th className="py-3">No</th>
                <th className="py-3">Username</th>
                <th className="py-3">Email</th>
                <th className="py-3">Request Type</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-500 hover:bg-slate-800/40 transition">
                  <td className="py-5">{startIndex + index + 1}</td>
                  <td className="py-5 font-medium">@{item.username}</td>
                  <td className="py-5 text-slate-300">{item.email}</td>
                  <td className="py-5">{item.requestType}</td>
                  <td className="py-5">{item.date}</td>
                  <td className="py-5">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Pending' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5">
                    <RiUserForbidLine
                      onClick={() => showBlockModal(item)}
                      className="cursor-pointer text-xl text-red-400 hover:text-red-300"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 rounded bg-orange-500 disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-slate-300 flex items-center gap-2">
            <span className='min-w-8 flex items-center justify-center min-h-8 rounded-full bg-orange-500 disabled:opacity-40'>{currentPage}</span> of
            <span className='min-w-8 flex items-center justify-center min-h-8 rounded-full bg-orange-500 disabled:opacity-40'>
              {totalPages}
            </span>
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-6 py-2 rounded bg-orange-500 disabled:opacity-40"
          >
            Next
          </button>
        </div>

        {/* Block User Modal */}
        <Modal
          title="Block User"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          centered
          className="dark-modal"
        >
          <p className="mb-6 text-slate-700">
            Are you sure you want to block{' '}
            <span className="font-semibold text-orange-500">@{selectedUser?.username}</span>?
          </p>
          <div className="flex justify-end gap-3">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button danger type="primary" onClick={handleBlockUser}>
              Block User
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default UserRequestList;