// import { PhotoIcon } from '@heroicons/react/24/solid'
function AddAnimal() {
  return (
    <>
      <div className="rounded shadow-md max-w-xl card p-10">
        <form className="">
          <div className="space-y-12">
            <div className=" ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Lägg till ett djur
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Djurets namn
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-name"
                        name="animal-name"
                        type="text"
                        placeholder="Doris"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Djurtyp
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-type"
                        name="animal-type"
                        type="text"
                        placeholder="Elefant"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-weight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Vikt
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-weight"
                        name="animal-weight"
                        type="text"
                        placeholder="500 kg"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="animal-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bild på djuret
                  </label>
                  <div className=" mt-2 flex justify-center rounded-lg border border-dashed border-slate-900/25 px-6 py-10">
                    <div className="text-center">
                      {/* <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    /> */}
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Avbryt
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lägg till
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default AddAnimal
