import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/data',
    headers: {
        'Content-Type': 'application/json',
      },

})

export const getData = async () => {
    try {
      const response = await apiClient.get('/ShowNotebook');
        if (response.status === 200) {
          return response.data.data.allReviews;
       }
    }
      catch(error) {
        console.error('Error fetching data:', error);
        throw error;
      }
  };


  export const postData = async (data) => {
    try {
      const response = await apiClient.post('/ConfirmReviewSaved', data);
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }; 