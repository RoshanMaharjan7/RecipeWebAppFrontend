import { useLoaderData } from "react-router-dom"

export async function loader (props:any) {
    console.log(props)
    const teams =[
        {
            id: '1',
            name: 'Team 1'
        },
        {
            id: '2',
            name: 'Team 2'
        },
        {
            id: '3',
            name: 'Team 3'
        },
    ]

    const team = teams.find(team => team.id === props.params.id)

    return {
        team: team || "No team"
    }
}

const   Test = () => {
    const {team}:any = useLoaderData();
  return (
    <div>Test = {team.name}</div>
  )
}

export default Test