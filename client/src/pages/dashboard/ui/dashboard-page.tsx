import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <>
      main page
    </>
  );
};