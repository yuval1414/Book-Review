import axios from 'axios';

const apiClient = axios.create({
    //baseURL: 'http://localhost:8080/api/v1/data',
    baseURL: 'http://localhost:8080/reviews',
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
      const response = await apiClient.post('/reviews/add', data);
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
   
  export const getReviewsByTitle = async (data) => {
      try {
        const response = await apiClient.get(`/bookName/${data}`);
        return response;
      } catch (error) {
        console.error('Error getting reviews bt title:', error);
        throw error;
      }
  }; 

  export const getReviewsByUsername = async (data) => {
    try {
      const response = await apiClient.get(`/user/${data}`);
      return response;
    } catch (error) {
      console.error('Error getting reviews by username:', error);
      throw error;
    }
  };

    export const getReviewsAndBooksByUsername = async (username) => {
      try {
        const response = await apiClient.get(`/user/myReviews/${username}`);
        console.log("getReviews:" + response);
        return response;
      } catch (error) {
        console.error('Error getting reviews by username:', error);
        throw error;
      }
}; 