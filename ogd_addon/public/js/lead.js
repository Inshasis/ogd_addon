// Copyright (c) 2022, InshaSiS Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lead', {
	setup(frm) {
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

frappe.ui.form.on('Lead', {
    refresh: function(frm) {
    frm.add_custom_button(__("Add Lead to Prospect"), function() {
		let me = this;
		frappe.prompt([
			{
				fieldname: 'prospect',
				label: __('Prospect'),
				fieldtype: 'Link',
				options: 'Prospect',
				reqd: 1
			}
		],
		function(data) {
			frappe.call({
				method: 'erpnext.crm.doctype.lead.lead.add_lead_to_prospect',
				args: {
					'lead': me.frm.doc.name,
					'prospect': data.prospect
				},
				callback: function(r) {
					if (!r.exc) {
					    
						me.frm.reload_doc();
					}
				},
				freeze: true,
				freeze_message: __('Adding Lead to Prospect...')
			});
		}, __('Add Lead to Prospect'), __('Add'));
    }).css({ 'background-color': '#18b81b', 'color': 'white' });
   }
});

frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        var doc = frm.doc;
        var shouldHideCreateButton = true; 
        var createButton = frm.page.inner_toolbar.find('.btn:contains("Create")');
        
        createButton.toggle(!shouldHideCreateButton);

        frm.add_custom_button(__("Customer"), frm.cscript.make_customer, __("Create"));
        frm.add_custom_button(__("Opportunity"), function() {
            frm.trigger("make_opportunity");
        }, __("Create"));
        frm.add_custom_button(__("Quotation"), frm.cscript.make_quotation, __("Create"));

        if (!doc.__onload.linked_prospects.length) {
            frm.add_custom_button(__("Prospect"), frm.cscript.make_prospect, __("Create"));
            frm.add_custom_button(__('Add to Prospect'), frm.cscript.add_lead_to_prospect, __('Action'));
        }
    }
});

frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        var doc = frm.doc;
        var shouldHideCreateButton = true;
        var createButton = frm.page.inner_toolbar.find('.btn:contains("Create")');

        createButton.toggle(!shouldHideCreateButton);

        frm.add_custom_button(__("Customer"), frm.cscript.make_customer, __("Create"));
        frm.add_custom_button(__("Opportunity"), function() {
            frm.trigger("make_opportunity");
        }, __("Create"));
        frm.add_custom_button(__("Quotation"), frm.cscript.make_quotation, __("Create"));

        if (!doc.__onload.linked_prospects.length) {
            frm.add_custom_button(__("Prospect"), frm.cscript.make_prospect, __("Create"));
            frm.add_custom_button(__('Add to Prospect'), frm.cscript.add_lead_to_prospect, __('Action'));
        }
    }
});

frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        var doc = frm.doc;
        var shouldHideActionButton = true;
        var actionButton = frm.page.inner_toolbar.find('.btn:contains("Action")');

        actionButton.toggle(!shouldHideActionButton);

        frm.add_custom_button(__("Customer"), frm.cscript.make_customer, __("Create"));
        frm.add_custom_button(__("Opportunity"), function() {
            frm.trigger("make_opportunity");
        }, __("Create"));
        frm.add_custom_button(__("Quotation"), frm.cscript.make_quotation, __("Create"));

        if (!doc.__onload.linked_prospects.length) {
            frm.add_custom_button(__("Prospect"), frm.cscript.make_prospect, __("Create"));
            frm.add_custom_button(__('Add to Prospect'), frm.cscript.add_lead_to_prospect, __('Action'));
        }
    }
});




