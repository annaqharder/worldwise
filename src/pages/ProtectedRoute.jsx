import PropTypes from "prop-types";
import { useAuth } from "../contexts/FakeAuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
