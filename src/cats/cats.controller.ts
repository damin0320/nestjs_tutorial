import { Body, Controller, Req, Get, HttpCode, Param, Post, Put, Query, Bind } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import {CatsService} from './cats.service'
import {Cats} from './interface/cats.interface'

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}


    @Post()
    @HttpCode(201)
    async create(@Body() CreateCatDto : CreateCatDto){
        this.catsService.create(CreateCatDto);
    }

    @Get()
    @HttpCode(200)
    async findAll():Promise<Cats[]>{
        return this.catsService.findAll();
    }

    // @Post()
    // async create(@Body() CreateCatDto : CreateCatDto){
    //     return CreateCatDto;
    // }

    // @Get()
    // findAll() : string{
    //     return 'This action returns all cats'
    // }
    // @Get(':id')
    // find(@Param('id') id){
    //     return id;
    // }
    // @Post()
    // @HttpCode(201)
    // createCats(@Body('name') name){
    //     return name;
    // }

    // @Put()
    // @HttpCode(200)
    // updateCats(@Body('id') id, @Body('name') name){
    //     return {id, name};
    // }

    // @Get()
    // @HttpCode(200)
    // findCats(@Query('name') name){
    //     return {name}
    // }

}
