"use client";

import React, { useState } from 'react';
import Modal from '@/components/Modal';

interface Maintenance {
  date: string;
  description: string;
}

interface Part {
  name: string;
  quantity: number;
  provider: string;
}

interface Machine {
  name: string;
  type: string;
  model: string;
  manufactureDate: string;
  serialNumber: string;
  location: string;
  image: string | File;
  maintenances: Maintenance[];
  parts: Part[];
}

const initialMachines: Machine[] = [
  {
    name: "Máquina 1",
    type: "Tipo A",
    model: "Modelo X",
    manufactureDate: "2024-01-01",
    serialNumber: "SN123456",
    location: "Localização A",
    image: "/retroescavadeira.jpg",
    maintenances: [
      { date: "2024-06-01", description: "Troca de óleo" },
      { date: "2024-07-15", description: "Substituição de correia" },
    ],
    parts: [
      { name: "Correia", quantity: 1, provider: "Fornecedor X" },
      { name: "Óleo", quantity: 2, provider: "Fornecedor Y" },
    ],
  },
];

const MainPage: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>(initialMachines);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [newMachine, setNewMachine] = useState<Machine>({
    name: "",
    type: "",
    model: "",
    manufactureDate: "",
    serialNumber: "",
    location: "",
    image: "",
    maintenances: [],
    parts: []
  });

  const handleOpenDetailModal = (machine: Machine) => {
    setSelectedMachine(machine);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedMachine(null);
    setIsDetailModalOpen(false);
  };

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMachine(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMachines(prevMachines => [...prevMachines, newMachine]);
    handleCloseAddModal();
    setNewMachine({
      name: "",
      type: "",
      model: "",
      manufactureDate: "",
      serialNumber: "",
      location: "",
      image: "",
      maintenances: [],
      parts: []
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setNewMachine(prevState => ({
        ...prevState,
        image: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <button
        onClick={handleOpenAddModal}
        className="self-end bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full shadow-lg mb-4 transition-transform transform hover:scale-105 focus:outline-none"
      >
        Adicionar Máquina
      </button>

      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Lista de Máquinas</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {machines.map((machine, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => handleOpenDetailModal(machine)}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{machine.name}</h2>
            <p className="text-gray-600"><strong>Tipo:</strong> {machine.type}</p>
            <p className="text-gray-600"><strong>Modelo:</strong> {machine.model}</p>
            <div className="relative w-full h-48">
              {machine.image && (
                <img
                  src={typeof machine.image === "string" ? machine.image : URL.createObjectURL(machine.image)}
                  alt={machine.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg border border-gray-300 shadow-sm"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isDetailModalOpen} onClose={handleCloseDetailModal} title="Detalhes da Máquina">
        {selectedMachine && (
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedMachine.name}</h2>
            <p className="text-gray-700"><strong>Tipo:</strong> {selectedMachine.type}</p>
            <p className="text-gray-700"><strong>Modelo:</strong> {selectedMachine.model}</p>
            <p className="text-gray-700"><strong>Data de Fabricação:</strong> {selectedMachine.manufactureDate}</p>
            <p className="text-gray-700"><strong>Número de Série:</strong> {selectedMachine.serialNumber}</p>
            <p className="text-gray-700 pb-4"><strong>Localização:</strong> {selectedMachine.location}</p>
            {selectedMachine.image && (
              <img
                src={typeof selectedMachine.image === "string" ? selectedMachine.image : URL.createObjectURL(selectedMachine.image)}
                alt={selectedMachine.name}
                className="w-full h-auto object-contain mt-3 rounded-lg border border-gray-300 shadow-md"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Histórico de Manutenções:</h3>
              {selectedMachine.maintenances.length > 0 ? (
                <ul className="list-disc list-inside pl-5">
                  {selectedMachine.maintenances.map((maintenance, index) => (
                    <li key={index} className="text-gray-600">
                      <strong>Data:</strong> {maintenance.date}, <strong>Descrição:</strong> {maintenance.description}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Nenhum histórico de manutenção disponível.</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Peças e Materiais Utilizados:</h3>
              {selectedMachine.parts.length > 0 ? (
                <ul className="list-disc list-inside pl-5">
                  {selectedMachine.parts.map((part, index) => (
                    <li key={index} className="text-gray-600">
                      <strong>Nome:</strong> {part.name}, <strong>Quantidade:</strong> {part.quantity}, <strong>Fornecedor:</strong> {part.provider}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Nenhum registro de peças disponível.</p>
              )}
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Adicionar Máquina">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              name="name"
              value={newMachine.name}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo:</label>
            <input
              type="text"
              name="type"
              value={newMachine.type}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Modelo:</label>
            <input
              type="text"
              name="model"
              value={newMachine.model}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Data de Fabricação:</label>
            <input
              type="date"
              name="manufactureDate"
              value={newMachine.manufactureDate}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Número de Série:</label>
            <input
              type="text"
              name="serialNumber"
              value={newMachine.serialNumber}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Localização:</label>
            <input
              type="text"
              name="location"
              value={newMachine.location}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Imagem:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Adicionar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MainPage;
