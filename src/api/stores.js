class Stores {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/stores', filter);
  }

  retrieve(id) {
    return this.client.get(`/stores/${id}`);
  }

  create(data) {
    return this.client.post(`/stores`, data);
  }

  update(id, data) {
    return this.client.put(`/stores/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/stores/${id}`);
  }

  uploadImage(storeId, formData) {
    return this.client.postFormData(`/stores/${storeId}/image`, formData);
  }

  deleteImage(id) {
    return this.client.delete(`/stores/${id}/image`);
  }
}

module.exports = Stores
