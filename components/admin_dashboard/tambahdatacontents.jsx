import ContentHeader from "../utils/content-header"
import TambahDataSiswaForm from "../forms/formtambahsiswa"
import TambahDataGuruForm from "../forms/formtambahguru"
import TambahDataDudiForm from "../forms/formtambahdudi"
import { useEffect, useState } from "react"
import Card from "../utils/card"

export default function TambahDataContents() {
  const [tipe, setTipe] = useState('')
  let form;
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Admin',
      url: '#'
    },
    {
      isActive: true,
      text: 'Tambah Data',
      url: '#'
    },
  ]
  if (tipe == 'siswa') {
    form = <TambahDataSiswaForm />
  } else if (tipe == 'guru') {
    form = <TambahDataGuruForm />
  } else {
    form = <TambahDataDudiForm />
  }
  return (
    <div className="">
      <ContentHeader title={'Tambah Data'} listBreadcrumb={breadcrumbs} />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className={`card bg-gradient-`}>
                <div className="card-header border-0">
                  <h3 className="card-title">
                    <i className={`far `} />
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <div className="container-fluid">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div>
                            <label htmlFor="exampleInputName1">Data</label>
                            <select className="form-control" value={tipe} onChange={(e) => setTipe(e.target.value)}>
                              <option value="siswa">Siswa</option>
                              <option value="guru">Guru</option>
                              <option value="dudi">Dudi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {form}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}