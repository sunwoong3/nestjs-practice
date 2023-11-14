import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    // @Body('title') title: string,
    // @Body('description') description: string,
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
