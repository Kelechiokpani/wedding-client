import { icons } from '@/public/assets/icons';
import { ChevronRight } from 'lucide-react';
import React from 'react'

function SelectLanguage() {
  return (
    <div className="space-y-1">
      <div className=" border rounded-md h-10 px-3 text-sm font-normal text-text flex items-center justify-between">
        <p>Select language</p>
        <ChevronRight className="w-5" />
      </div>
      <div className="flex items-center gap-2 text-[#C20A10] bg-[#FFF0F0] rounded-lg py-5 px-3">
        <span className="w-6 h-6 flex items-center justify-center">
          {icons.info}
        </span>
        <p className="font-normal text-sm">
          The language you select here will change the language of the
          application. Please, double-check before you proceed.
        </p>
      </div>
    </div>
  );
}

export default SelectLanguage