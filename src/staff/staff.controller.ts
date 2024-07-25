import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';

@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) { }

    @Get()
    findAll(): Promise<Staff[]> {
        return this.staffService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Staff> {
        return this.staffService.findOne(id);
    }

    @Post()
    create(@Body() staff: Staff): Promise<Staff> {
        return this.staffService.create(staff);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() staff: Staff): Promise<Staff> {
        return this.staffService.update(id, staff);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.staffService.remove(id);
    }
}
