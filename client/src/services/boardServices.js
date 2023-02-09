import axios from "axios";
import { toast } from "react-toastify";

// Create board
export const createBoard = async (boardData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/board/create`,
      boardData
    );
    if (response.statusText === "OK") {
      toast.success("Board criado com sucesso!");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};