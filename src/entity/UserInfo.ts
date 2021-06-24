/**
 * UserInfo Entity
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'login_id' })
  loginId: string;

  @Column({ select: false, name: 'pass_word' })
  password: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'user_sex' })
  userSex: string;

  @Column({ name: 'user_address' })
  userAddress: string;

  @Column({ name: 'user_cellphone' })
  userCellphone: string;

  @Column({ name: 'user_type', default: '1' })
  userType: string;

  @Column({ name: 'belongs_user' })
  belongsUser: string;

  @Column({ select: false, name: 'create_time' })
  createTime: string;

  @Column({ select: false, name: 'update_time' })
  updateTime: string;
}
