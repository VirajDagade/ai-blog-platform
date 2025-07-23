import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

// This line imports axios, a popular library used to make HTTP requests (like GET, POST) from your React app to a backend or API.
import axios from "axios";

// This line sets the default base URL for all axios requests.
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// createContext() creates a new context.
const AppContext = createContext();

/*
   AppProvider is a wrapper component.

   value is the data (can be anything: state, functions, objects) you want to share globally.

   AppContext.Provider wraps children, giving them access to value.
*/

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      //  Every future axios request automatically includes the token in the headers.
      axios.defaults.headers.common["Authorization"] = token;
    }
  }, []);

  //   These are shared tools and data.
  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  //   Instead of defining them in every component, you define once in context.Then use useAppContext() to access them anywhere.

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// This hook allows other components to easily access the context like
