import { Plus, Search, FileDown, MoreHorizontal } from 'lucide-react';
import { Header } from './components/header';
import { Tabs } from './components/tabs';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Control } from './components/ui/input';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from './components/ui/table';
import { Pagination } from './components/pagination';

export function App() {
  return (
    <div className='py-10 space-y-8'>
      <Header />
      <Tabs />
      <main className='max-w-6xl mx-auto space-y-5'>
        <div className='flex items-center gap-3'>
          <h1 className='text-xl font-bold'>Tags</h1>
          <Button variant='primary'>
            <Plus className='size-3' />
            Create new
          </Button>
        </div>

        <div className='flex items-center justify-between'>
          <Input variant='filter'>
            <Search className='size-3' />
            <Control placeholder='Search tags...'></Control>
          </Input>

          <Button>
            <FileDown className='size-3' />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-medium'>React</span>
                      <span className='text-xs text-zinc-500'>
                        AAAAAAAAAAA-FFEFEFEAFE-FEEAFEFEF-AAAAAAA-AAA
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className='text-zinc-300'>16 video(s)</TableCell>
                  <TableCell className='text-right'>
                    <Button size='icon'>
                      <MoreHorizontal></MoreHorizontal>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
      </main>
    </div>
  );
}