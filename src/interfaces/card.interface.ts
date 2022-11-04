export interface ICard {
  dados: {
    id: number,
    nome: string,
    data: string,
    titulo: string,
    mensagem: string,
    informacoe: {
      id: number,
      item: string
    }[]
  }
}
