class Api {
  constructor(url) {
    this.url = url;
  }

  getState (displayId) {
      return fetch(`${this.url}/display/${displayId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
          console.log(res);
          if (res.ok) return res.json()
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
  }
}

const api = new Api("http://localhost:3001");
export default api