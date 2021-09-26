const BASEAPI = "http://localhost:3001";

const apiFetchPost = async (url, body) => {
  const res = await fetch(BASEAPI + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  return json;
};

const apiFetchGet = async (url) => {
  const res = await fetch(BASEAPI + url);
  const json = await res.json();
  return json.materias;
};

const API = {
  getMaterias: async () => {
    const json = await apiFetchGet("/materias");
    return json;
  },
  createMateria: async (nome, descricao, periodo) => {
    const json = await apiFetchPost("/materias", { nome, descricao, periodo });
    return json;
  },
};

export default () => API;
