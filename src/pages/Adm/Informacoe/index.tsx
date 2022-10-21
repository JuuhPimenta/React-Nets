import { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "components";
import * as S from "./styles";
import { apiInformacoe } from "services/data";
import { IInformacoeData } from "interfaces/informacoe.interface";
import { LoadingComponent } from "components";
import { FcAddDatabase } from "react-icons/fc";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import { AdmInformacoePage } from "..";
import Informacoe from "services/data/Informacoe";

const AdmInformacoe = () => {
  const [AdmInformacoe, setinformacoe] = useState<IInformacoeData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await apiInformacoe.index();
    setinformacoe(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiInformacoe.destroy(id);
              toast.success("Informaçao removida com sucesso!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <div>
              <ButtonComponent
                bgColor="add"
                type="button"
                onClick={() => navigate("/adm/informacoe/0")}
              >
                <FcAddDatabase />
              </ButtonComponent>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Título</th>
                  <th>Mensagem</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {Informacoe &&
                  Informacoe.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user?.name}</td>
                      <td>{item.title}</td>
                      <td>{item.message}</td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="edit"
                          onClick={() => navigate(`/adm/informacoe/${item.id}`)}
                        >
                          <BsPencilSquare />
                        </ButtonComponent>
                      </td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </ButtonComponent>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Main>
        </>
      )}
    </>
  );
};

export default AdmInformacoe;