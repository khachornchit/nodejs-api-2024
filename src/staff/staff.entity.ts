import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    staff_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    address_id: number;

    @Column()
    picture: Buffer;

    @Column()
    email: string;

    @Column()
    store_id: number;

    @Column()
    active: boolean;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_update: Date;
}
