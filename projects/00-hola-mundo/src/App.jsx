import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'unknown',
        name: 'Jheison Andrés Morelo Morales',
        isFollowing: true
    },
    {
        id: 3,
        userName: 'yanez@gmail.com',
        name: 'Greis Yanez',
        isFollowing: false
    },
    {
        id: 4,
        userName: 'avocado@gmail.com',
        name: 'Avocado Lover',
        isFollowing: true
    },
    {
        id: 5,
        userName: 'osita@gmail.com',
        name: 'Osita Lover',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { id, userName, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard
                            key={id}
                            userName={userName}
                            isFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}