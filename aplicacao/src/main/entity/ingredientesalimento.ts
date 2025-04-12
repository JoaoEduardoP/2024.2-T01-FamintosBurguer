import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Alimento } from './alimentos'
import { Pedido } from './pedido'
import { Ingrediente } from './ingredientes'

@Entity('ingredientesalimento')
export class IngredientesAlimento {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('integer')
  quantidade: number

  @Column('integer')
  valor: number

  @Column('boolean')
  custom: boolean

  @Column('text')
  observacao: string

  @ManyToOne(() => Alimento, (alimento) => alimento.ingredientesalimento, { onDelete: 'CASCADE' })
  alimento: Alimento // Chave estrangeira para a tabela `Alimentos`

  @ManyToOne(() => Ingrediente, (ingrediente) => ingrediente.ingredientesalimento, {
    onDelete: 'CASCADE'
  })
  ingrediente: Ingrediente // Chave estrangeira para a tabela `Ingredientes`

  @OneToOne(() => Pedido, (pedido) => pedido.ingredientesalimento, { cascade: true })
  @JoinColumn() // Indica que esta entidade possui a chave estrangeira
  pedido: Pedido
}
