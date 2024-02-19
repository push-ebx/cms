import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ContentRepositoryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <>
      contenet rep
    </>
  );
};