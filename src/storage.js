class Storage {
  setLocal(string) {
    localStorage.setItem("hello", string)
  }

  getLocal() {
    return localStorage.getItem("hello")
  }
}

module.exports = Storage
