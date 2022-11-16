import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiInformacoe} from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IInformacoeData } from "interfaces/informacoe.interface";
import { IErrorResponse } from "interfaces/user.interface";


const InformacoeStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IInformacoeData>({
    time: '',
    temporada: 0,
    vitorias: 0,

    
  })
  const { id } = useParams<{ id: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      console.log(Number(id))
      if (Number(id) > 0) {
        await apiInformacoe.update(Number(id), formData);
        toast.success("Informaçao alterada com sucesso!");
      } else {
        await apiInformacoe.store(formData);
        toast.success("Informaçao cadastrada com sucesso!");
      }
      navigate('/adm/informacoe')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }

  async function handleChange(e: IInformacoeData) {
    setFormData((state: IInformacoeData) => ({ ...state, ...e }))
  }


  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiInformacoe.show(id);
          setFormData(response.data);
  
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/informacoe">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="time">Time: </label>
                <input type="text" id="time" placeholder="Escreva o Time" required
                  onChange={(e) => handleChange({ time: e.target.value })}
                  value={formData?.time}
                />
              </div>
              <div>
                <label htmlFor="temporada">Temporada: </label>
                <textarea id="temporada" placeholder="Escreva a Temporada" required
                  onChange={(e) => handleChange({ temporada: Number(e.target.value) })}
                  value={formData?.temporada}
                />
              </div>
              <div>
                <label htmlFor="vitorias">Vitorias: </label>
                <textarea id="vitorias" placeholder="Escreva o numero de Vitorias" required
                  onChange={(e) => handleChange({ vitorias: Number(e.target.value) })}
                  value={formData?.vitorias}
                />
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default InformacoeStore;