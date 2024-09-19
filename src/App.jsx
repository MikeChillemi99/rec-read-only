import ChargesDoughnutChart from "./components/chargesDoughnutChart";
import SalaryDoughnutChart from "./components/salaryDoughnutChart";
function App() {
  return (
    <div class="flex flex-col h-screen">
      <div className="mt-2 w-full h-24 flex items-center justify-center">
        <h1 className="text-4xl underline font-bold text-black text-center">Répartition Équitable des Coûts | Lecture seule</h1>
      </div>
      <div className="mt-2 mb-8 w-full h-auto flex flex-col items-center justify-center">
        {/* Items part */}
        <div className="p-3 w-10/12 h-auto flex flex-col lg:flex-row items-start justify-around rounded-lg bg-white drop-shadow-xl">
          {/* Left part - Personnes */}
          <div className="m-3 w-full lg:w-6/12 h-full text-lg">
            <div className="p-5 flex flex-col items-start justify-center">
              <h1 className="mb-8 text-2xl font-bold underline decoration-dark-cerulean">Personnes et revenu</h1>
              <div className="w-full flex flex-col md:flex-row items-start justify-start font-bold">
                <form className="w-full">
                  <label htmlFor="name">Nom : </label>
                  <input
                    className="mb-2 rounded w-full md:w-48"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom de la personne"
                    disabled
                    required
                  />
                  <label htmlFor="salary">Revenu net : </label>
                  <input
                    className="mb-2 rounded w-full md:w-48"
                    type="number"
                    id="salary"
                    name="salary"
                    placeholder="Revenu net"
                    disabled
                    required
                  />
                  <button
                    className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                    type="submit"
                    disabled
                  >
                    Ajouter
                  </button>
                </form>
              </div>
              <div className="w-full flex items-center justify-start font-bold">
                {/* Form to Update a user */}
                <form>
                  <label htmlFor="name">Nom : </label>
                  <input
                    className="mb-2 rounded w-48"
                    type="text"
                    id="name"
                    name="name"
                    disabled
                    required
                  >
                  </input>
                  <label htmlFor="salary">Revenu net : </label>
                  <input
                    className="mb-2 rounded w-48"
                    type="number"
                    id="salary"
                    name="salary"
                    disabled
                    required
                  >
                  </input>
                  <button
                    className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                    type="submit"
                    disabled
                  >
                    Sauvegarder
                  </button>
                </form>
              </div>
            </div>
            <div className="p-5 text-lg">
              <table className="table-auto w-full border border-dark-cerulean">
                <thead className="text-white bg-dark-cerulean">
                  <tr>
                    <th className="border-b border-dark-cerulean">Nom</th>
                    <th className="border-b border-dark-cerulean">Revenu net</th>
                    <th className="border-b border-dark-cerulean">&nbsp;</th>
                    <th className="border-b border-dark-cerulean">&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-cerulean">
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Jean</td>
                    <td className="border-b border-dark-cerulean">3'500.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Anne</td>
                    <td className="border-b border-dark-cerulean">4'200.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Pierre</td>
                    <td className="border-b border-dark-cerulean">5'300.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mr-6 flex flex-col items-center justify-center">
              <h1 className="text-xl text-green-500 font-bold">Total revenu : 13'000.-</h1>
            </div>
          </div>
          {/* Right part - Charges */}
          <div className="m-3 w-full lg:w-6/12 h-full text-lg">
            <div className="p-5 flex flex-col items-start justify-center">
              <h1 className="mb-8 text-2xl font-bold underline decoration-dark-cerulean">Charges et coût</h1>
              <div className="w-full flex flex-col md:flex-row items-start justify-start font-bold">
                <form className="w-full">
                  <label htmlFor="name">Nom : </label>
                  <input
                    className="mb-2 rounded w-full md:w-48"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom de la charge"
                    disabled
                    required
                  />
                  <label htmlFor="cost">Coût : </label>
                  <input
                    className="mb-2 rounded w-full md:w-48"
                    type="number"
                    id="cost"
                    name="cost"

                    placeholder="Coût"
                    disabled
                    required
                  />
                  <button
                    className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                    type="submit"
                    disabled
                  >
                    Ajouter
                  </button>
                </form>
              </div>
              <div className="w-full flex items-center justify-start font-bold">
                {/* Form to Update a charge */}
                <form>
                  <label htmlFor="name">Nom : </label>
                  <input
                    className="mb-2 rounded w-48"
                    type="text"
                    id="name"
                    name="name"
                    disabled
                    required
                  >
                  </input>
                  <label htmlFor="cost">Coût : </label>
                  <input
                    className="mb-2 rounded w-48"
                    type="number"
                    id="cost"
                    name="cost"
                    disabled
                    required
                  >
                  </input>
                  <button
                    className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                    type="submit"
                    disabled
                  >
                    Sauvegarder
                  </button>
                </form>
              </div>
            </div>
            <div className="p-5 text-lg">
              <table className="table-auto w-full border border-dark-cerulean">
                <thead className="text-white bg-dark-cerulean">
                  <tr>
                    <th className="border-b border-dark-cerulean">Nom</th>
                    <th className="border-b border-dark-cerulean">Coût</th>
                    <th className="border-b border-dark-cerulean">&nbsp;</th>
                    <th className="border-b border-dark-cerulean">&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-cerulean">
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Loyer</td>
                    <td className="border-b border-dark-cerulean">1'700.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Courses</td>
                    <td className="border-b border-dark-cerulean">450.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Voiture</td>
                    <td className="border-b border-dark-cerulean">500.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Internet</td>
                    <td className="border-b border-dark-cerulean">100.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white text-center">
                    <td className="border-b border-dark-cerulean">Vacances</td>
                    <td className="border-b border-dark-cerulean">1200.-</td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-3 rounded-lg"
                        disabled
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="border-b border-dark-cerulean">
                      <button
                        className="bg-dark-cerulean hover:bg-untited-nations-blue text-white py-1 px-4 rounded-lg"
                        disabled
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mr-6 flex flex-col items-center justify-center">
              <h1 className="text-xl text-green-500 font-bold">Total charges : 3'950.-</h1>
            </div>
          </div>
        </div>
        {/* Calcul part */}
        <div className="mt-4 w-10/12 h-auto flex flex-col lg:flex-row items-center justify-evenly rounded-lg bg-white drop-shadow-xl">
          <div className="w-auto h-auto flex flex-col items-start justify-start">
            <div className="p-2 mb-2 text-2xl font-bold underline decoration-dark-cerulean">
              <h1 className="text-3xl underline font-bold text-black">Résultat des répartitions</h1>
            </div>
            <div className="p-2 text-xl font-bold">
              <ul>
                <li>
                  Jean : {((3950 * 3500) / 13000).toFixed(2)}
                </li>
                <li>
                  Anne : {((3950 * 4200) / 13000).toFixed(2)}
                </li>
                <li>
                  Pierre : {((3950 * 5300) / 13000).toFixed(2)}
                </li>
              </ul>
            </div>
          </div>
          {/* Chart */}
          <div className="w-full lg:w-1/2 h-auto flex flex-col lg:flex-row items-center justify-evenly">
            <div className="w-72 h-72">
              <SalaryDoughnutChart />
            </div>
            <div className="w-72 h-72">
              <ChargesDoughnutChart />
            </div>
          </div>
          {/* End chart */}
        </div>
        {/* End calcul part */}
      </div>
        <footer className="mt-auto bg-white rounded-lg shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4">
          <p className="text-center text-gray-500">© 2024 REC | mike-chillemi.ch</p>
        </div>
      </footer>
    </div>
  )
}

export default App
