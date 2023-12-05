import React from 'react'
import dayjs from 'dayjs';
import { Menu, Slideover } from "../../base-components/Headless";
import {
  FormLabel,
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import KoreksiTable from '../Table/KoreksiTable';
import { isEmpty } from 'lodash';

const SlideOverDate = (props : any) => {
    const {
        viewSlideOver, setViewSlideOver, 
        dataDate, 
        subViewSlideOver, setSubViewSlideOver,
        keterangan, setKeterangan,
        submitKoreksiUser
    } = props;

    return (
        <div>
            {/* BEGIN: Slide Over Content */}
                <Slideover
                    // backdrop="static"
                    open={viewSlideOver}
                    onClose={() => {
                        setViewSlideOver(false);
                    }}
                >
                        {/* BEGIN: Slide Over Header */}
                    <form onSubmit={submitKoreksiUser}>
                        <Slideover.Panel>
                        <a
                            onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                                setViewSlideOver(false);
                            }}
                            className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                            href="#"
                        >
                            <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                        </a>
                    
                        <Slideover.Title>
                            <h2 className="mr-auto text-base font-medium">
                                Form Koreksi 
                            </h2>
                            <Menu>
                            <Menu.Items className="w-40">
                                <Menu.Item
                                    onClick={()=>setSubViewSlideOver(0)}
                                >
                                <Lucide icon="Edit3" className="w-4 h-4 mr-2" />
                                    Form Koreksi
                                </Menu.Item>
                                <Menu.Item
                                    onClick={()=>setSubViewSlideOver(1)}
                                >
                                <Lucide icon="Eye" className="w-4 h-4 mr-2" />
                                    View Koreksi
                                </Menu.Item>
                            </Menu.Items>
                            </Menu>
                        </Slideover.Title>
                        {/* END: Slide Over Header */}
                        {/* form koreksi */}
                        <Slideover.Description>
                            <div className={`grid grid-cols-1 md:grid-cols-1 gap-6 mb-10`}>
                                <div>
                                <FormLabel htmlFor="modal-form-1">Tanggal</FormLabel>
                                <div>: {dayjs(dataDate && dataDate.tanggalMulai).format('YYYY-MM-DD')}</div>
                                </div>
                                <div className="">
                                <FormLabel htmlFor="modal-form-2">Jam</FormLabel>
                                <div>: {dayjs(dataDate && dataDate.tanggalMulai).format('HH:mm:ss')}</div>
                                </div>
                                <div className="">
                                <FormLabel htmlFor="modal-form-3">
                                    Tipe Absen
                                </FormLabel>
                                <div>: {dataDate.tipe_absen && dataDate.tipe_absen.name}</div>
                                </div>
                            </div>
                            {/* form koreksi */}
                            {/* <div className="mt-3">
                            <FormLabel htmlFor="modal-form-4">
                                Jam
                            </FormLabel>
                            <FormInput
                                id="modal-form-4"
                                type="time"
                                step="1"
                                formInputSize="sm"
                            />
                            </div> */}
                            {/* <div className="mt-3">
                            <FormLabel htmlFor="modal-form-6">Tipe Absen</FormLabel>
                            <FormSelect 
                                id="modal-form-6"
                                formSelectSize="sm"
                                >
                                <option></option>
                                <option>Masuk</option>
                                <option>Pulang</option>
                                <option>Shift Masuk</option>
                                <option>Shift Pulang</option>
                            </FormSelect>
                            </div> */}
                            <div className={`${dataDate.koreksis && dataDate.koreksis.length === 0 ? '' : 'hidden'}`}>
                                <FormLabel htmlFor="modal-form-4">
                                    Keterangan
                                </FormLabel>
                                <FormTextarea
                                    id="modal-form-4"
                                    formTextareaSize="sm"
                                    className='h-32'
                                    value={keterangan}
                                    onChange={(e)=>setKeterangan(e.target.value)}
                                />
                            </div>
                            {dataDate.koreksis && dataDate.koreksis.length !== 0 ?  
                                <KoreksiTable 
                                    datas={dataDate.koreksis}
                                    linkView={'/viewKoreksi'}
                                    linkCreate={'/'}
                                />
                                :
                                ''
                            }
                        </Slideover.Description>
                        {/* end: form koreksi */}
                        {/* BEGIN: Slide Over Footer */}
                        <Slideover.Footer className={`${dataDate.koreksis && dataDate.koreksis.length === 0 ? '' : 'hidden'}`}>
                            <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                                setViewSlideOver(false);
                            }}
                            className="w-20 mr-1"
                            size='sm'
                            >
                            Cancel
                            </Button>
                            <Button
                            variant="primary"
                            type="submit"
                            className="w-auto"
                            size='sm'
                            >
                            Send Request
                            </Button>
                        </Slideover.Footer>
                    </Slideover.Panel>
                    </form>
                    {/* END: Slide Over Footer */}
                </Slideover>
                {/* END: Slide Over Content */}
        </div>
    )
}

export default SlideOverDate