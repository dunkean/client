class Brands {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/brands', filter);
  }

  retrieve(id) {
    return this.client.get(`/brands/${id}`);
  }

  create(data) {
    return this.client.post(`/brands`, data);
  }

  update(id, data) {
    return this.client.put(`/brands/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/brands/${id}`);
  }

  uploadImage(brandId, formData) {
    return this.client.postFormData(`/brands/${brandId}/image`, formData);
  }

  deleteImage(id) {
    return this.client.delete(`/brands/${id}/image`);
  }
}

module.exports = Brands
