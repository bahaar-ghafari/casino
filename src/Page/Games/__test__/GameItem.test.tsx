import {fireEvent, render, screen, waitFor, act} from '@testing-library/react'
import GameItem from '../Components/GameItem'
import { BrowserRouter } from 'react-router-dom'

describe('GameItem Test', () => { 
    it('should render game item', async () => {
        render(
            <BrowserRouter>
                <GameItem categoryIds={[1,2]} code='test' description='test' icon='' name='game1'  />
            </BrowserRouter>
        )
        const $name = await screen.findAllByRole('heading')        
        expect($name[0].innerHTML).toBe('game1')
    })
 })