import './styles/main.css'
import logoImg from './assets/logo-nlw-sports.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../src/components/Form/Input'
import { GameController } from 'phosphor-react'

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count {
    ads: number;
  }
}


function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className=" text-7xl text-white font-black mt-20 ">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>
        está aqui!
      </h1>

  
      <div className="grid grid-cols-6 gap-6 mt-16">

      {games.map(game => {
        return (
          <GameBanner 
          key={game.id}
          bannerUrl= {game.bannerUrl}
          title={game.title} 
          adsCount={game._count.ads} 
          />
        )
      })}

       
      </div>
      <Dialog.Root>
      <CreateAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/68 inset-0 fixed'/>

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-3x1 font-black'>Publique um Anúncio!</Dialog.Title>

          <form className='mt-8' flex flex-col gap-4>
            <div className='flex flex-col gap-2'>
              <label htmlFor='game'>Qual o game?</label>
              <Input id="game" placeholder="Selecione o game que deseja jogar"  />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (Ou nickname)</label>
              <Input id="name" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className="flex flex-col gap-2">
                <label htmlFor='yearsPlaying'>Joga ha quanto tempo?</label>
                <Input id="yearsPlaying" type="number" placeholder="tudo bem ser ZERO" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu discord?</label>
                <Input id="discord" type="text" placeholder="Usuario#0000" />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
              </div>

                <div className='grid grid-cols-4 gap-2'>
                  <button title='Domingo' className='w-8 h-8 rounded bg-zinc-900'>D</button>
                  <button title='segunda' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                  <button title='terça' className='w-8 h-8 rounded bg-zinc-900'>T</button>
                  <button title="quarta" className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                  <button title='quinta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                  <button title='sexta' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                  <button title='Sabado' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horario do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input id="hourStart" type="time" placeholder="de" />
                <Input id="hourEnd" type="time" placeholder='Até' />
              </div>
              </div>
            </div>

            <div className='mt-2 flex gap-2 text-sm'>
              <Input type="checkbox" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className='mt-4 flex justfy-end gap-4'>
              <Dialog.Close type="button" className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-500'>Cancelar</Dialog.Close>
              <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'type='submit'></button>
                <GameController size={24} />
                Encontrar Duo
            </footer>
          </form>
          
        </Dialog.Content>
      </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
