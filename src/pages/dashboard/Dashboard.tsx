import { useEffect, useState } from "react";
import { TarefasService } from "../../services/api/tarefas/TarefasService";
import { ApiException } from "../../services/api/ApiException";
import { iTarefa } from "../../interfaces";
export const Dashboard = () => {
  const [tarefas, setTarefas] = useState<iTarefa[]>([])
  useEffect(() => {
    TarefasService.getAll()
    .then((res) => {
      if(res instanceof ApiException){
        alert(res.message);
      } else {
        setTarefas(res);
      }
    });
  }, []);
  return (
    <div>
      <p className="text-black text-4xl font-bold text-center">
        Dashboard
      </p>
      <ul>
        {tarefas.map((item, i) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      
    </div>
  );
}
