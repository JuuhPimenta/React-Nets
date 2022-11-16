import {IInformacoeData} from "interfaces/informacoe.interface";
import api from "services/api";

class InformacoeData {
    index() {
      return api.get<IInformacoeData[]>('/informacoes')
    }
    store(data: IInformacoeData) {
      return api.post(`/informacoes`, data)
    }
    show(id: number) {
      return api.get<IInformacoeData>(`/informacoes/${id}`)
    }
    update(id: number, data: IInformacoeData) {
      return api.put(`/informacoes/${id}`, data)
    }
    destroy(id: number) {
      return api.delete(`/informacoes/${id}`)
    }
  }
  
  export default new InformacoeData()