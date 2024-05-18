class APIService {
  baseUrl = "https://api.escuelajs.co/api/v1";
  

  // Method to set authorization token
  

  // Method to make GET requests
  async get(endpoint,auth=true, params = {}) {
    try {
        const token=await localStorage.getItem('token')
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "GET",
        params,
        headers:  auth && token
          ? {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          : { Accept: "application/json", "Content-Type": "application/json" },
      })
        .then(async (res) => await res.json())
        .catch((err) => {
          console.log(err);
        });
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
      
  // Method to make POST requests
  async post(endpoint,auth=true, data = {}) {
    try {
        const token=await localStorage.getItem('token')
      const options = {
        method: "POST",
        headers:  auth && token
          ? {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          : { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
    

      const response = await fetch(`${this.baseUrl}/${endpoint}`, options);
      console.log(response)
      return response.json();
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
}

// Export APIService class
module.exports = APIService;
