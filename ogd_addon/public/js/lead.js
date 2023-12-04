// Copyright (c) 2022, InshaSiS Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lead', {
	refresh(frm) {
	    if(frappe.session.user_email == "avinash@onegreendiary.com"){
	        set_field_options("custom_lead_type", ["OGD Client","OGD Channel Partner","OGD ConsultantClient","Rise Client","Rise Channel Partner","Rise Consultant","ERP"]);
	    }
	    
	    if(frappe.session.user_email == "prashant@onegreendiary.com"){
	        set_field_options("custom_lead_type", ["OGD Client","OGD Channel Partner","OGD ConsultantClient","Rise Client","Rise Channel Partner","Rise Consultant","ERP"]);
	    }
	    
	    if(frappe.session.user_email == "pooja.kulkarni@onegreendiary.com"){
	        set_field_options("custom_lead_type", ["OGD Client","OGD Channel Partner","OGD ConsultantClient","Rise Client","Rise Channel Partner","Rise Consultant","ERP"]);
	    }
	    
	    if(frappe.session.user_email == "yogesh@onegreendiary.com"){
	        set_field_options("custom_lead_type", ["Client","Channel Partner","Pirl Client","Pirl  Channel Partner","Pirl Consultant","Consultant","OGD Client","OGD Channel Partner","OGD ConsultantClient","Rise Client","Rise Channel Partner","Rise Consultant"]);
	    }
	    
	    if(frappe.session.user_email == "ravi@xcellifesciences.com"){
	        set_field_options("custom_lead_type", ["Xcel Client","Xcel Channel Partner","Xcel Consultant"]);
	    }
	    
	    if(frappe.session.user_email == "malay@xcellifesciences.com"){
	        set_field_options("custom_lead_type", ["Xcel Client","Xcel Channel Partner","Xcel Consultant"]);
	    }
	    
	    if(frappe.session.user_email == "ayush@xcellifesciences.com"){
	        set_field_options("custom_lead_type", ["Xcel Client","Xcel Channel Partner","Xcel Consultant"]);
	    }
	    
	    if(frappe.session.user_email == "vivek@pirllabs.ai"){
	        set_field_options("custom_lead_type", ["Pirl Client","Pirl  Channel Partner","Pirl Consultant","Xcel Client","Xcel Channel Partner","Xcel Consultant"]);
	    }
	    
	    if(frappe.session.user_email == "rajan@pirllabs.co.in"){
	        set_field_options("custom_lead_type", ["Pirl Client","Pirl  Channel Partner","Pirl Consultant"]);
	    }
	    
	},
	custom_lead_type: function(frm) {
	    cur_frm.set_value('type',cur_frm.doc.custom_lead_type);
    },
// 	onload: function(frm) {
// 	    frm.set_df_property('lead_owner',  'read_only', 1);
// 	    if(!frm.is_new()){
//             if (frappe.session.user === "Administrator"){
//                 cur_frm.set_value("lead_owner", "") ; 
//                 cur_frm.save();
//             }
//             else if(frappe.session.user !== cur_frm.doc.lead_owner){
//                 cur_frm.set_value("lead_owner", frappe.session.user_email) ;    
//                 cur_frm.save();
//             }
// 	    }
        
        
//     }
});



