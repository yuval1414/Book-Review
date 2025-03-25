import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/books',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getAllBooksTitles = async () => {
    try{
        const response = await apiClient.get('/books/allTitles');
        if (response.status === 200) {
            return response.data.data;
         }
    }
    catch(error) {
        console.error('Error fetching book titles:', error);
        throw error;
      }
}