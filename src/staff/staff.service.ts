import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff)
        private readonly staffRepository: Repository<Staff>,
    ) { }

    findAll(): Promise<Staff[]> {
        return this.staffRepository.find();
    }

    findOne(id: number): Promise<Staff> {
        return this.staffRepository.findOneBy({ staff_id: id });
    }

    create(staff: Staff): Promise<Staff> {
        return this.staffRepository.save(staff);
    }

    async update(id: number, staff: Staff): Promise<Staff> {
        await this.staffRepository.update(id, staff);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.staffRepository.delete(id);
    }
}
