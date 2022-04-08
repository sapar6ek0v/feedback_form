import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm"

@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    user_name: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date
}