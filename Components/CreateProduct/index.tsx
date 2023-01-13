export const CreateProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32">
      <div className="mx-4 md:mr-14 border-b-2">
        <div className="grid lg:grid-cols-5 items-center">
          <h1 className="col-span-3 text-5xl font-bold mr-20 mb-5">
            List your property
          </h1>
          <button className="col-span-2 rounded-full border-2 lg:mx-10 text-slate-900 font-bold px-4 py-2 hover:bg-slate-800 hover:text-white transition duration-500">
            Switch to experience
          </button>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold">Upload photos</h1>
          <h1 className="text-md">Drag or choose your file to upload</h1>
          <input type="file" id="myFile" name="filename" />
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold">Property details</h1>

          <div>
            <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
              Title
            </h1>
            <input
              type="text"
              placeholder={`e.g. "Spectacular views of Queenstown"`}
              className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
            />
          </div>

          <div className="flex">
            <div className="mr-10">
              <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
                Price
              </h1>
              <input
                type="text"
                placeholder={`e.g. "$180"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>

            <div>
              <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
                Discount
              </h1>
              <input
                type="text"
                placeholder={`e.g. "10%"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div>
            <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
              Location
            </h1>
            <input
              type="text"
              placeholder={`e.g. "Queenstown, Otago, New Zealand"`}
              className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
            />
          </div>

          <div className="flex">
            <div className="mr-2 lg:mr-10">
              <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
                Bedroom
              </h1>
              <input
                type="text"
                placeholder={`e.g. "3"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>

            <div className="mr-2 lg:mr-10">
              <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
                Living room
              </h1>
              <input
                type="text"
                placeholder={`e.g. "2"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>

            <div>
              <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
                Kitchen
              </h1>
              <input
                type="text"
                placeholder={`e.g. "1"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div>
            <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
              Description
            </h1>
            <textarea
              rows={5}
              placeholder={`e.g. "Spectacular views of Queenstown"`}
              className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
            />
          </div>

          <div>
            <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
              Amenities
            </h1>
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>

            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div>
            <h1 className="uppercase text-sm font-bold mt-5 text-slate-500">
              Core features
            </h1>
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg mr-5"
              />

              <input
                type="text"
                placeholder={`e.g. "Free wifi 24/7"`}
                className="mt-1 w-full border-2 px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <button className="my-10 rounded-full border-2 text-slate-900 font-bold px-4 py-2 hover:bg-slate-800 hover:text-white transition duration-500">
            + Add more features
          </button>
        </div>
      </div>

      <button className="ml-4 my-10 rounded-full border-2 text-white bg-blue-500 font-bold px-6 py-3 hover:bg-blue-800 transition duration-500">
        Submit for review
      </button>
    </div>
  );
};
