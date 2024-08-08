"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import { saveAs } from "file-saver";
import Papa from "papaparse";

interface Maintenance {
  date: string;
  description: string;
  priority: string;
  responsible: string;
  status: string;
  machine: string;
  team: string;
  files: File[];
  comments: string[];
}

const initialMaintenances: Maintenance[] = [
  {
    date: "2024-06-01",
    description: "Troca de óleo",
    priority: "Alta",
    responsible: "Equipe A",
    status: "Concluída",
    machine: "Máquina 1",
    team: "Equipe A",
    files: [],
    comments: ["Troca realizada com sucesso"],
  },
  // Adicione outras manutenções iniciais conforme necessário
];

const priorities = ["Baixa", "Média", "Alta"];
const statuses = ["Pendente", "Em andamento", "Concluída", "Cancelada"];

const MaintenancePage: React.FC = () => {
  const [maintenances, setMaintenances] = useState<Maintenance[]>(initialMaintenances);
  const [filteredMaintenances, setFilteredMaintenances] = useState<Maintenance[]>(initialMaintenances);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMaintenance, setSelectedMaintenance] = useState<Maintenance | null>(null);
  const [newMaintenance, setNewMaintenance] = useState<Maintenance>({
    date: "",
    description: "",
    priority: priorities[0],
    responsible: "",
    status: statuses[0],
    machine: "",
    team: "",
    files: [],
    comments: [],
  });

  const [filter, setFilter] = useState({
    machine: "",
    startDate: "",
    endDate: "",
    priority: "",
    responsible: "",
    status: "",
    team: "",
  });

  const [editMaintenance, setEditMaintenance] = useState<Maintenance | null>(null);

  // Função para abrir o modal de detalhes
  const handleOpenDetailModal = (maintenance: Maintenance) => {
    setSelectedMaintenance(maintenance);
    setIsDetailModalOpen(true);
  };

  // Função para fechar o modal de detalhes
  const handleCloseDetailModal = () => {
    setSelectedMaintenance(null);
    setIsDetailModalOpen(false);
  };

  // Função para abrir o modal de adição
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  // Função para fechar o modal de adição
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  // Função para abrir o modal de filtro
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  // Função para fechar o modal de filtro
  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  // Função para abrir o modal de edição
  const handleOpenEditModal = (maintenance: Maintenance) => {
    setEditMaintenance({ ...maintenance });
    setIsEditModalOpen(true);
  };

  // Função para fechar o modal de edição
  const handleCloseEditModal = () => {
    setEditMaintenance(null);
    setIsEditModalOpen(false);
  };

  // Função para alterar o estado com base no tipo de input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMaintenance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para alterar o estado do filtro
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com a mudança de arquivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setNewMaintenance((prevState) => ({
        ...prevState,
        files: fileArray,
      }));
    }
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editMaintenance) {
      const files = Array.from(e.target.files || []);
      setEditMaintenance((prevState) => ({
        ...prevState!,
        files,
      }));
    }
  };

  const handleEditCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (editMaintenance) {
      const comment = e.target.value;
      setEditMaintenance((prevState) => ({
        ...prevState!,
        comments: [comment], // Atualiza com o novo comentário
      }));
    }
  };

  // Função para lidar com o envio do formulário de manutenção
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMaintenances([...maintenances, newMaintenance]);
    setFilteredMaintenances([...filteredMaintenances, newMaintenance]); // Adiciona ao filtro também
    handleCloseAddModal();
    setNewMaintenance({
      date: "",
      description: "",
      priority: priorities[0], // Resetado para o valor padrão
      responsible: "",
      status: statuses[0], // Resetado para o valor padrão
      machine: "",
      team: "",
      files: [],
      comments: [],
    });
  };

  // Função para lidar com a atualização de manutenção
  const handleUpdate = () => {
    if (editMaintenance) {
      setMaintenances(
        maintenances.map((maintenance) =>
          maintenance === selectedMaintenance ? editMaintenance : maintenance
        )
      );
      setFilteredMaintenances(
        filteredMaintenances.map((maintenance) =>
          maintenance === selectedMaintenance ? editMaintenance : maintenance
        )
      );
      handleCloseEditModal();
    }
  };

  // Função para gerar e baixar o relatório em CSV
  const handleGenerateReport = () => {
    const csv = Papa.unparse(filteredMaintenances);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "relatorio_manutenção.csv");
  };

  // Função para aplicar o filtro
  const handleApplyFilter = () => {
    const { machine, startDate, endDate, priority, responsible, status, team } = filter;

    const filtered = maintenances.filter((maintenance) => {
      const matchesMachine = machine ? maintenance.machine.includes(machine) : true;
      const matchesPriority = priority ? maintenance.priority === priority : true;
      const matchesResponsible = responsible ? maintenance.responsible.includes(responsible) : true;
      const matchesStatus = status ? maintenance.status === status : true;
      const matchesTeam = team ? maintenance.team.includes(team) : true;
      const matchesDate =
        startDate && endDate
          ? new Date(maintenance.date) >= new Date(startDate) &&
            new Date(maintenance.date) <= new Date(endDate)
          : true;

      return (
        matchesMachine &&
        matchesPriority &&
        matchesResponsible &&
        matchesStatus &&
        matchesTeam &&
        matchesDate
      );
    });

    setFilteredMaintenances(filtered);
    handleCloseFilterModal();
  };

  return (
    <div className="flex flex-col p-4 overflow-auto">
      <div className="flex flex-row gap-2 justify-end">
        <button
          onClick={handleOpenAddModal}
          className="self-end bg-blue-500 text-white p-3 rounded-full shadow-lg mb-4 focus:outline-none"
        >
          Adicionar manutenção
        </button>
        <button
          onClick={handleOpenFilterModal}
          className="self-end bg-yellow-500 text-white p-3 rounded-full shadow-lg mb-4 focus:outline-none"
        >
          Filtrar dados
        </button>
        <button
          onClick={handleGenerateReport}
          className="self-end bg-green-500 text-white p-3 rounded-full shadow-lg mb-4 focus:outline-none"
        >
          Gerar relatório
        </button>
      </div>

      <h1 className="text-xl font-semibold mb-4">Lista de Manutenções</h1>
      <div className="grid gap-4">
        {filteredMaintenances.map((maintenance, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
          >
            <p>
              <strong>Descrição:</strong> {maintenance.description}
            </p>
            <p>
              <strong>Data:</strong> {maintenance.date}
            </p>
            <p>
              <strong>Prioridade:</strong> {maintenance.priority}
            </p>
            <p>
              <strong>Status:</strong> {maintenance.status}
            </p>
            <button
              onClick={() => handleOpenDetailModal(maintenance)}
              className="mt-2 bg-blue-500 text-white p-2 rounded-full focus:outline-none"
            >
              Detalhes
            </button>
            <button
              onClick={() => handleOpenEditModal(maintenance)}
              className="mt-2 bg-yellow-500 text-white p-2 rounded-full focus:outline-none"
            >
              Editar
            </button>
          </div>
        ))}
      </div>

      {/* Modal de Adição */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        title="Adicionar Manutenção"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Data:
            <input
              type="date"
              name="date"
              value={newMaintenance.date}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label>
            Descrição:
            <textarea
              name="description"
              value={newMaintenance.description}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label>
            Prioridade:
            <select
              name="priority"
              value={newMaintenance.priority}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </label>
          <label>
            Responsável:
            <input
              type="text"
              name="responsible"
              value={newMaintenance.responsible}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={newMaintenance.status}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label>
            Máquina:
            <input
              type="text"
              name="machine"
              value={newMaintenance.machine}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label>
            Equipe:
            <input
              type="text"
              name="team"
              value={newMaintenance.team}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label>
            Arquivos:
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border p-2 rounded"
            />
          </label>
          <label>
            Comentários:
            <textarea
              name="comments"
              value={newMaintenance.comments.join("\n")}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
          >
            Adicionar
          </button>
        </form>
      </Modal>

      {/* Modal de Filtro */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        title="Filtrar Manutenções"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleApplyFilter(); }} className="flex flex-col gap-4">
          <label>
            Máquina:
            <input
              type="text"
              name="machine"
              value={filter.machine}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
          </label>
          <label>
            Data de Início:
            <input
              type="date"
              name="startDate"
              value={filter.startDate}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
          </label>
          <label>
            Data de Fim:
            <input
              type="date"
              name="endDate"
              value={filter.endDate}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
          </label>
          <label>
            Prioridade:
            <select
              name="priority"
              value={filter.priority}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            >
              <option value="">Todas</option>
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </label>
          <label>
            Responsável:
            <input
              type="text"
              name="responsible"
              value={filter.responsible}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={filter.status}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            >
              <option value="">Todos</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label>
            Equipe:
            <input
              type="text"
              name="team"
              value={filter.team}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
          >
            Aplicar Filtro
          </button>
        </form>
      </Modal>

      {/* Modal de Detalhes */}
      <Modal
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        title="Detalhes da Manutenção"
      >
        {selectedMaintenance && (
          <div>
            <p><strong>Data:</strong> {selectedMaintenance.date}</p>
            <p><strong>Descrição:</strong> {selectedMaintenance.description}</p>
            <p><strong>Prioridade:</strong> {selectedMaintenance.priority}</p>
            <p><strong>Status:</strong> {selectedMaintenance.status}</p>
            <p><strong>Máquina:</strong> {selectedMaintenance.machine}</p>
            <p><strong>Equipe:</strong> {selectedMaintenance.team}</p>
            <p><strong>Responsável:</strong> {selectedMaintenance.responsible}</p>
            <p><strong>Comentários:</strong></p>
            <ul>
              {selectedMaintenance.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <div>
              <strong>Arquivos:</strong>
              <ul>
                {selectedMaintenance.files.map((file, index) => (
                  <li key={index}>
                    <a href={URL.createObjectURL(file)} download={file.name}>
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal de Edição */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        title="Editar Manutenção"
      >
        {editMaintenance && (
          <form
            onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}
            className="flex flex-col gap-4"
          >
            <label>
              Data:
              <input
                type="date"
                name="date"
                value={editMaintenance.date}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  date: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              />
            </label>
            <label>
              Descrição:
              <textarea
                name="description"
                value={editMaintenance.description}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  description: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              />
            </label>
            <label>
              Prioridade:
              <select
                name="priority"
                value={editMaintenance.priority}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  priority: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              >
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Responsável:
              <input
                type="text"
                name="responsible"
                value={editMaintenance.responsible}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  responsible: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              />
            </label>
            <label>
              Status:
              <select
                name="status"
                value={editMaintenance.status}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  status: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Máquina:
              <input
                type="text"
                name="machine"
                value={editMaintenance.machine}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  machine: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              />
            </label>
            <label>
              Equipe:
              <input
                type="text"
                name="team"
                value={editMaintenance.team}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  team: e.target.value,
                }))}
                className="border p-2 rounded"
                required
              />
            </label>
            <label>
              Arquivos:
              <input
                type="file"
                multiple
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  files: [...prevState!.files, ...Array.from(e.target.files!)]
                }))}
                className="border p-2 rounded"
              />
            </label>
            <label>
              Comentários:
              <textarea
                name="comments"
                value={editMaintenance.comments.join("\n")}
                onChange={(e) => setEditMaintenance((prevState) => ({
                  ...prevState!,
                  comments: e.target.value.split("\n"),
                }))}
                className="border p-2 rounded"
              />
            </label>
            <button
              type="submit"
              className="bg-yellow-500 text-white p-3 rounded-full shadow-lg"
            >
              Atualizar
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default MaintenancePage;
