import { useEffect, useState } from 'react'
import { iGroup } from '../../interfaces'
import { GroupService } from '../../services/api/grupos/GrupoService'

const Grupo = () => {

  const [group, setGroup] = useState<iGroup[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getAll = async () => {
      setLoading(true)
      try {
        const data = await GroupService.getAll();
        setGroup(data)
        setLoading(false)
      } catch (error) {
        alert(error)
      }

    }
    getAll();
  }, [])
  return (
    <div>

      <p className="text-slate-300 text-2xl font-bold text-center">
        {loading && 'carregando...'}
      </p>
      <div className="w-full flex gap-3 flex-col">
        {group && group.map(g =>
          <div className="border-2 rounded-lg border-gray-100 flex  items-center justify-start p-3 text-red-900 gap-5" key={g.id}>
            <div className="bg-slate-500 rounded-lg h-24 w-32">

            </div>
            <div>
              <h1 className="text-2xl">{g.name}</h1>
              <p>{g.description}</p>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

export default Grupo