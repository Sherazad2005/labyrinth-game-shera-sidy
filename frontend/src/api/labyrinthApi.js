import axios from "axios";

export async function fetchLevel(LevelId) {
    try{
        const { data } = await axios.get(`http://localhost:4000/api/levels/${LevelId}`);
        return data;
    } catch (error) {
        console.error("Erreur lors de la récuperation de niveau :", error);
        throw error;
    }
}