import { ApiConfigModel } from '@/domain/entities'
import { Table, Column, Model, PrimaryKey, Unique, NotNull } from 'sequelize-typescript'

@Table({
  modelName: 'tb_api_config',
  schema: 'email_api',
  timestamps: true,
  freezeTableName: true,
})
export class ApiConfigEntity extends Model<ApiConfigModel> implements ApiConfigModel {
  @PrimaryKey
  @Column({ type: 'varchar(36)', allowNull: false })
  uuid: string

  @Unique
  @Column({ field: 'integration_key', allowNull: false })
  integrationKey: string

  @Column({ defaultValue: true, allowNull: false })
  status: boolean

  @Column
  createdAt: Date
}
