import { useEffect, useState } from "react";
import StudentsHttp from "../http/studentsHttp";



const Dashboard = () => {


  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    StudentsHttp.getAll2().then(( res )=>setAlumnos(res.data))
  }, []);
  
  return (
    
    <div className="container mt-4">
      <div className="row">

        {
     
          alumnos.map((alumno) => (
            <div key={alumno.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={alumno.avatar} alt={alumno.first_name} />
                <div className="card-body">
                  <h5 className="card-title">{`${alumno.first_name} ${alumno.last_name}`}</h5>
                  <p className="card-text">{alumno.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard