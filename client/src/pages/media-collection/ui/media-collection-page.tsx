import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const MediaCollectionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <>
      media
    </>
  );
};